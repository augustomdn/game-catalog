import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import LoginForm from "../login-form/LoginForm"

export function LoginCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="">
                <CardTitle className="my-5 flex flex-col items-center justify-center gap-4">
                    <h1 className="font-honk uppercase text-3xl">Jogopédia</h1>
                    <h2>Efetue seu Login</h2>
                </CardTitle>
                <CardDescription hidden={true}>
                    Digite seu email abaixo para efetuar o login
                </CardDescription>
                <CardAction hidden={true}>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
            <CardFooter className="flex-col gap-2" hidden={true}>
                <Button type="submit" className="w-full">
                    Cadastrar-se
                </Button>
                <Button variant="outline" className="w-full">
                    Login com Google
                </Button>
            </CardFooter>
        </Card>
    )
}
