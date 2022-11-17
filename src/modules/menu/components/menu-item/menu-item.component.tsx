import {FC} from "react";

interface MenuItemProps {
    imagePath: string;
    weight: number;
    title: string;
    ingredients: string;
    price: number;
}

const values: MenuItemProps = {
    imagePath: "/assets/pizza/pepperoni.jpeg",
    weight: 555,
    ingredients: "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
    price: 215,
    title: "Піца Мангеттен"
}

export const MenuItem: FC<MenuItemProps> = ({
    imagePath,
    ingredients,
    weight,
    price,
    title
}) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl bg-white">
            <div className="relative">
                <img className="object-cover object-center w-full h-[15rem] rounded"
                     src={imagePath} alt="peperoni"/>
                <span
                    className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">{weight}г</span>
            </div>
            <div className="p-8">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mb-8">
                    {ingredients}
                </p>
                <span className="text-xl font-semibold">{price} грн.</span>
            </div>
        </div>
    );
};

