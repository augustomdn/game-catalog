"use client"

import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type UpdatePasswordFormInput = {
    password: string;
    confirmPassword: string;
};

const formItems = [
    { label: 'Senha', htmlFor: 'password', type: 'password', id: 'password', placeholder: 'Nova senha' },
    { label: 'Confirmar senha', htmlFor: 'password', type: 'password', id: 'confirmPassword', placeholder: 'Confirme sua senha' },
];

export default function UpdatePasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<UpdatePasswordFormInput>();

    const router = useRouter();

    const onSubmit = async (data: UpdatePasswordFormInput) => {
        const { password, confirmPassword } = data;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            alert("Erro ao redefinir senha: " + error.message);
            return;
        }

        alert("Senha alterada com sucesso!");
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
                            {...register(item.id as keyof UpdatePasswordFormInput, {
                                required: `${item.label} é obrigatório`,
                            })}
                        />
                        {errors[item.id as keyof UpdatePasswordFormInput] && (
                            <p className="text-red-500 text-sm">
                                {errors[item.id as keyof UpdatePasswordFormInput]?.message}
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
