// const getWeekday = (today: Date) => {
//     return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
// }

type Props ={
    name: string;
    avatar: string;
    roles: string[];
    address?: string;
}
export const Person = ({name, avatar, roles}: Props) => {

    const today: Date = new Date();

    return (
        <div className="p-3">
            <h1 style={{color: "red", fontSize: "30px"}}>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>
        </div>
    );  
}