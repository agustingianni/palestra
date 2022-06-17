import { Navigate } from "react-router";
import { useForm } from "react-hook-form";
import { Alert, AlertIcon, AlertTitle, Flex, Input, Button, Heading, VStack } from '@chakra-ui/react'
import { yupResolver as resolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth, useUser } from "../hooks/auth"

// Use `yup` to validate the form.
const loginFormResolver = resolver(yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
}))

function LoginPage() {
    const { signin } = useAuth()
    const { user } = useUser()

    const { setError, register, handleSubmit, formState: { isValid, isSubmitting, errors } } = useForm(
        {
            mode: "onChange",
            resolver: loginFormResolver
        }
    );

    const onSubmit = async ({ username, password }) => {
        try {
            await signin(username, password)
        } catch (error) {
            setError("auth", { message: "Invalid credentials" })
        }
    }

    if (user)
        return <Navigate to="/" />

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center" background="gray.100">
            <VStack align='stretch' p="12" rounded="6" boxShadow='xl' background="white">
                <Heading mb="3">Login</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack align='stretch'>
                        <Input
                            id='username'
                            placeholder="User"
                            {...register("username")}
                        />

                        <Input
                            id='password'
                            type='password'
                            placeholder="Password"
                            {...register("password")}
                        />

                        <Button
                            isDisabled={!isValid}
                            isLoading={isSubmitting}
                            type="submit"
                        >
                            Login
                        </Button>
                    </VStack>
                </form>
                {
                    errors.auth &&
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{errors.auth.message}</AlertTitle>
                    </Alert>
                }

            </VStack>
        </Flex>
    )
}

export default LoginPage