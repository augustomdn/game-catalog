
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import UpdatePasswordForm from "./form/update-password-form/UpdatePasswordForm"


export function UpdatePasswordCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="">
                    <h1 className="text-3xl font-bold">Redefinir senha</h1>
                </CardTitle>
                <CardDescription className="" hidden={true}>
                </CardDescription>
            </CardHeader>
            <CardContent>
               <UpdatePasswordForm />
            </CardContent>
            <CardFooter className="flex-col gap-2" hidden={true}>
            </CardFooter>
        </Card>
    )
}
