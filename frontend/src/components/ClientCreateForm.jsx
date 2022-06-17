import { useForm } from "react-hook-form";
import { HStack, Select, Textarea, Input, Button, VStack } from '@chakra-ui/react'
import { yupResolver as resolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns'
import { useClientMutation } from "../hooks/clients";

// TODO(goose): Validate `start_date`.
const formResolver = resolver(yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    type: yup.string().required(),
    start_date: yup.string().required(),
    subscription: yup.string().required(),
    notes: yup.string()
}))

function capitalize(value) {
    return value.trim().replace(/^\w/, (c) => c.toUpperCase())
}

function ClientCreateForm() {
    const { mutate: addClient, isLoading } = useClientMutation()

    const { setError, register, handleSubmit, formState: { isValid } } = useForm({
        mode: "onChange",
        resolver: formResolver
    });

    const onSubmit = async (data) => {
        try {
            addClient(data)
        } catch (error) {
            console.log(error)
            setError("form", { message: "Invalid" })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack align='stretch'>
                <Input
                    id='name'
                    placeholder="First name"
                    {...register("name")}
                />

                <Input
                    id='lastname'
                    placeholder="Last name"
                    {...register("lastname")}
                />

                <Select
                    id='type'
                    {...register("type")}
                >
                    {
                        ["regular", "athlete", "university", "management"].map(type =>
                            <option value={type} key={type}>{capitalize(type)}</option>
                        )
                    }
                </Select>

                <HStack>
                    <Input
                        id='start_date'
                        value={format(new Date(), 'dd/MM/yyyy')}
                        {...register("start_date")}
                    />

                    <Select
                        id='subscription'
                        {...register("subscription")}
                        w="25%"
                    >
                        {
                            ["1", "3", "6", "12"].map(subscription =>
                                <option value={subscription} key={subscription}>{subscription}</option>
                            )
                        }
                    </Select>
                </HStack>

                <Textarea
                    id='notes'
                    placeholder="Notes"
                    {...register("notes")}
                />

                <Button
                    isDisabled={!isValid}
                    isLoading={isLoading}
                    type="submit"
                >
                    Add
                </Button>
            </VStack>
        </form>
    )
}


export default ClientCreateForm