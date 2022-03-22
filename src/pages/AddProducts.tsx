import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from '../types/products';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    name: string,
    onAdd: (product: IProduct) => void
}
type TInputs = {
    name: String,
    price: number
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>()
    const Navigate =  useNavigate();
    const onSubmit: SubmitHandler<TInputs> = data => {
        props.onAdd(data)
        Navigate('/admin/products')
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {props.name}
            <input type="text" placeholder="Ten san pham" {...register('name')} />
            <input type="number" placeholder="Gia san pham" {...register('price')} />
            <button>Thêm</button>
        </form>
    )
}

export default ProductAdd;

