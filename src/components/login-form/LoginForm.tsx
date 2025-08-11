"use client"

import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type LoginFormInputs = {
    email: string;
    password: string;
};

const formItems = [
    { label: 'Email', htmlFor: 'email', type: 'email', id: 'email', placeholder: 'seuemail@exemplo.com' },
    { label: 'Senha', htmlFor: 'password', type: 'password', id: 'password', placeholder: 'Digite sua senha' },
];

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormInputs>();

    const router = useRouter();

    const onSubmit = async (data: LoginFormInputs) => {
        const { email, password } = data;

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert("Erro ao fazer login: " + error.message);
            return;
        }

        router.push("/");
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
                            {...register(item.id as keyof LoginFormInputs, {
                                required: `${item.label} é obrigatório`,
                            })}
                        />
                        {errors[item.id as keyof LoginFormInputs] && (
                            <p className="text-red-500 text-sm">
                                {errors[item.id as keyof LoginFormInputs]?.message}
                            </p>
                        )}

                        {item.id === "password" && (
                            <div className="text-right">
                                <Link href="/recuperar-senha" className="ml-auto inline-block text-sm underline-offset-4">
                                    <span className="underline">Esqueceu a senha?</span>
                                </Link>
                            </div>
                        )}
                    </div>


                ))}
            </div>
            <div className="my-4 flex flex-col gap-4">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    Entrar
                </Button>
                <Button variant="outline" className="w-full">
                    Login com Google
                </Button>
                <div className="">
                    <span className="text-muted-foreground">Primeira vez?</span> <Link href={"/registro"}><span className="font-bold hover:underline">Cadastre-se aqui</span></Link>
                </div>
            </div>
        </form>
    );
}
