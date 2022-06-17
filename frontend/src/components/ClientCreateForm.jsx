import { Navigate } from "react-router";
import { useForm } from "react-hook-form";
import { HStack, Select, Textarea, Input, Button, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns'

const loginFormResolver = yupResolver(yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
}))

function onSubmit({ username, password }) {
    // TODO(goose): Implement
}

function capitalize(value) {
    return value.trim().replace(/^\w/, (c) => c.toUpperCase())
}

function ClientCreateForm() {
    const { register, handleSubmit, formState: { isValid, isSubmitting, isSubmitSuccessful } } = useForm(
        {
            mode: "onChange",
            resolver: loginFormResolver
        }
    );

    if (isSubmitSuccessful)
        return <Navigate to="/" />

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack align='stretch'>
                <Input id='first_name' placeholder="First name" {...register("first_name")} />

                <Input id='last_name' placeholder="Last name" {...register("last_name")} />

                <Select id='type' {...register("type")}>
                    {
                        ["regular", "athlete", "university", "management"].map(type =>
                            <option value={type} key={type}>{capitalize(type)}</option>
                        )
                    }
                </Select>

                <HStack>
                    <Input id='start_date' {...register("start_date")} value={format(new Date(), 'dd/MM/yyyy')} />

                    <Select id='subscription' {...register("subscription")} w="25%">
                        {
                            ["1", "3", "6", "12"].map(subscription =>
                                <option value={subscription} key={subscription}>{subscription}</option>
                            )
                        }
                    </Select>
                </HStack>

                <Textarea id='notes' placeholder="Notes" {...register("notes")} />

                <Button isDisabled={!isValid} isLoading={isSubmitting} type="submit">
                    Add
                </Button>

            </VStack>
        </form>
    )
}


export default ClientCreateForm