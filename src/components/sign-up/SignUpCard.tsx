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
import SignUpForm from "../sign-up-form/SignUpForm"

export function SignUpCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="">
                <CardTitle className="my-5 flex flex-col items-center justify-center gap-4">
                    <h1 className="font-honk uppercase text-3xl">Jogopédia</h1>
                    <h2>Cadastre-se</h2>
                </CardTitle>
                <CardDescription hidden={true}>
                    Digite seu email abaixo para efetuar o login
                </CardDescription>
                <CardAction hidden={true}>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <SignUpForm />
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
