import { Navigate } from "react-router";
import { useForm } from "react-hook-form";
import { Flex, Input, Button, Heading, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth, useUser } from "../hooks/auth"

// Use `yup` to validate the form.
const loginFormResolver = yupResolver(yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
}))

function LoginPage() {
    const { signin } = useAuth()
    const { user } = useUser()

    function onSubmit({ username, password }) {
        return signin(username, password)
    }

    const { register, handleSubmit, formState: { isValid, isSubmitting } } = useForm(
        {
            mode: "onChange",
            resolver: loginFormResolver
        }
    );

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
            </VStack>
        </Flex>
    )
}


export default LoginPage