import { BoardColumns } from "@/constants/types";
interface Props {
    column : BoardColumns
}
const ColumnContainer = ({column}: Props) => {
    return ( <div className="flex border-2 rounded-xl w-1/3 h-screen m-5">
        <p className="w-full h-7 text-center border-b-2">{ column }</p>
    </div> );
}
 
export default ColumnContainer;