"use client"

import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const formItems = [
    { label: 'Primeiro Nome', htmlFor: 'firstName', type: 'text', id: 'firstName', placeholder: 'Digite seu nome' },
    { label: 'Sobrenome', htmlFor: 'lastName', type: 'text', id: 'lastName', placeholder: 'Digite seu sobrenome' },
    { label: 'Email', htmlFor: 'email', type: 'email', id: 'email', placeholder: 'seuemail@exemplo.com' },
    { label: 'Senha', htmlFor: 'password', type: 'password', id: 'password', placeholder: 'Digite sua senha' },
];

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const { firstName, lastName, email, password } = data;

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                },
                emailRedirectTo: 'https://jogopedia.vercel.app/login'
            }
        }
        );

        if (signUpError) {

            if (signUpError.message.includes("already registered")) {
                alert("Este email já está cadastrado. Por favor, faça login ou recupere sua senha.");
            } else {
                alert("Erro ao cadastrar: " + signUpError.message);
            }

            return;
        }

        const userId = signUpData.user?.id;

        if (!userId) {
            alert("Usuário criado, mas não foi possível obter o ID.");
            return;
        }

        const { error: profileError } = await supabase.from("profiles").insert({
            id: userId,
            first_name: firstName,
            last_name: lastName
        });

        if (profileError) {
            alert("Cadastro realizado, mas houve erro ao salvar o perfil: " + profileError.message);
            reset();
            return;
        }

        alert("Cadastro realizado! Verifique seu email para confirmar.");
        reset();


    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                {formItems.map((item) => (
                    <div className="grid gap-2" key={item.id}>
                        <Label htmlFor={item.htmlFor}>{item.label}</Label>
                        <Input
                            type={item.type}
                            id={item.id}
                            placeholder={item.placeholder}
                            {...register(item.id as keyof FormData, {
                                required: `${item.label} é obrigatório`,
                            })}
                        />
                        {errors[item.id as keyof FormData] && (
                            <p className="text-red-500 text-sm">
                                {errors[item.id as keyof FormData]?.message}
                            </p>
                        )}

                        {item.id === "password" && (
                            <div className="text-right">
                                <Link href="/esqueci-senha" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    <span>Esqueceu a senha?</span>
                                </Link>
                            </div>
                        )}
                    </div>


                ))}
            </div>
            <div className="my-4 flex flex-col gap-4">
                <Button type="submit" className="w-full">
                    Cadastrar-se
                </Button>
                <Button variant="outline" className="w-full">
                    Login com Google
                </Button>
            </div>
        </form>
    );
}
