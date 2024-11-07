import { FC } from "react";

interface Props {
    filter: string;
    handleFilter: (filter: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFilter: FC<Props> = ({ filter, handleFilter }) => {
    return (
        <div className="search-content_input">
            <input
                type="text"
                placeholder="Search users..."
                value={filter}
                onChange={handleFilter}
                className="search-input"
            />
            <i className="fas fa-search"></i>
        </div>
    )
}
