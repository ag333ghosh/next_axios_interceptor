import React from "react";

interface Quote {
    id: number;
    quote: string;
    author: string;
}
const QuoteCard: React.FC<{ data: Quote }> = ({ data }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-[370px] mx-auto text-center">
            <p className="text-lg text-gray-800 italic mb-4">"{data.quote}"</p>
            <p className="text-sm text-gray-500 font-semibold">- {data.author}</p>
        </div>
    );
}
export default QuoteCard;