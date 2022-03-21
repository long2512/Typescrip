import { useForm, SubmitHandler } from 'react-hook-form';

// type Props = {};
type TypeInputs = {
    name: string,
    price: number
}
type ProductAddProps = {
  name: String,
  onAdd: (produst:TypeInputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        props.onAdd(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {props.name}
        <input type="text" placeholder='Ten san pham' {...register('name')} />
        <input type="number" placeholder='Gia san pham' {...register('price')} />
        <button>Add</button>
    </form>
  )
}

export default ProductAdd 