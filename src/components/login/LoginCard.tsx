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
                <CardTitle className="">
                    <h1 className="text-3xl font-bold">Entrar</h1>
                </CardTitle>
                <CardDescription hidden={true}>
                </CardDescription>
                <CardAction hidden={true}>
                </CardAction>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
            <CardFooter className="flex-col gap-2" hidden={true}>
            </CardFooter>
        </Card>
    )
}
