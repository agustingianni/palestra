import React from "react"
import { Navigate } from "react-router";
import { useMutation } from "react-query"
import { TbAlertCircle } from "react-icons/tb";
import { Container, LoadingOverlay, Stack, Notification, TextInput, PasswordInput, Button, Divider } from '@mantine/core';
import { useForm } from '@mantine/form'

import AuthService from "../service/auth"

function Login() {
    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        }
    });

    const mutation = useMutation((userData) =>
        AuthService.login(userData)
    )

    function handleSubmit({ username, password }) {
        mutation.mutate({
            username,
            password
        })
    }

    if (mutation.isSuccess)
        return <Navigate to="/" />

    return (
        <Container className="form-login-container">
            <div style={{ position: 'relative' }}>
                <h1>Login</h1>
                <Divider my="md" />
                <LoadingOverlay visible={mutation.isLoading} />
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        <TextInput
                            required
                            placeholder="User"
                            {...form.getInputProps('username')}
                        />
                        <PasswordInput
                            required
                            placeholder="Password"
                            {...form.getInputProps('password')}
                        />
                        <Button
                            type="submit">
                            Login
                        </Button>

                        {
                            mutation.isError &&
                            <Notification
                                title="Login error"
                                icon={<TbAlertCircle />}
                                color="red"
                                disallowClose
                            >
                                Invalid credentials, please retry
                            </Notification>
                        }
                    </Stack>
                </form>
            </div>
        </Container>
    )
}

export default Login