function SalesTitle({title, text}) {
    return (
        <div className=" py-3 ">
            <h1 className=" text-white ">
                {title}
            </h1>

            <p className=" text-gray-500 text-xs lg:text-sm ">
                {text}
            </p>
        </div>
    )
}

export default SalesTitle
