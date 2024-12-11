import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props;

    if(handleDelete){
      renderXMarkIcon = <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => handleDelete(id)}></XMarkIcon>
    }


    return (
        <div className="flex justify-between items-center mb-3 border border-black">
          <p>
            <span>01.02.23</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
          </p>
        </div>
      )
}

export default OrdersCard;