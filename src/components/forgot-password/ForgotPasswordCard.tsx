import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ForgotPasswordForm from "../forgot-password-form/ForgotPasswordForm"

export function ForgotPasswordCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="">
                    <h1 className="text-3xl font-bold">Recuperar senha</h1>
                </CardTitle>
                <CardDescription className="">
                    <span className="text-muted-foreground">
                        Informe o seu email para que possamos lhe enviar um link de recuperação de senha.
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent>
               <ForgotPasswordForm />
            </CardContent>
            <CardFooter className="flex-col gap-2" hidden={true}>
            </CardFooter>
        </Card>
    )
}
