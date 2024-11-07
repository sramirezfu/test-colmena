import { FC } from "react";
import { InputFilter } from "./InputFilter";

interface Props {
    filter: string;
    totalPost: number;
    handleFilter: (filter: React.ChangeEvent<HTMLInputElement>) => void
}

export const FilterPost: FC<Props> = ({ handleFilter, filter, totalPost }) => {
    return (
        <div className="w-[20%]">
            <div className="home-total_post mb-4">
                <span className="home-total_post-name">Posts</span>
                {totalPost > 0 && <span className="home-total_post-number">{totalPost}</span>}
            </div>
            <InputFilter handleFilter={handleFilter} filter={filter} />
        </div>
    )
}
