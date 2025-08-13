"use client"

import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type ForgotPasswordFormInput = {
    email: string;
};

const formItems = [
    { label: 'Email', htmlFor: 'email', type: 'email', id: 'email', placeholder: 'seuemail@exemplo.com' },
];

export default function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ForgotPasswordFormInput>();

    const redirectUrl =
        process.env.NODE_ENV === "production"
            ? "https://jogopedia.vercel.app/redefinir-senha"
            : "http://localhost:3000/redefinir-senha";

    const router = useRouter();

    const onSubmit = async (data: ForgotPasswordFormInput) => {
        const { email } = data;

        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl, });


        if (error) {
            if (error.message === 'Invalid login credentials') {
                alert('Email ou senha incorretos.');
                return;
            }

            alert("Erro ao fazer login: " + error.message);
            return;
        }

        alert(`Um email foi enviado para ${email} por favor cheque sua caixa de mensagens.`)


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
                            {...register(item.id as keyof ForgotPasswordFormInput, {
                                required: `${item.label} é obrigatório`,
                            })}
                        />
                        {errors[item.id as keyof ForgotPasswordFormInput] && (
                            <p className="text-red-500 text-sm">
                                {errors[item.id as keyof ForgotPasswordFormInput]?.message}
                            </p>
                        )}

                    </div>


                ))}
            </div>
            <div className="my-4 flex flex-col gap-4">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    Redefinir
                </Button>

            </div>
        </form>
    );
}
