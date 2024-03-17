import React, { useEffect, useState } from 'react';

interface Props {
    title: string;
    formType: string;
    placeHolderLG: string;
    placeHolderSM: string;
    children: React.ReactNode; // Add the children prop
}

const MyComponent: React.FC<Props> = ({ title, formType, placeHolderLG, placeHolderSM, children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const placeholder = windowWidth >= 1150 ? placeHolderLG : placeHolderSM;

    return (
        <div className="flex flex-col">
            <label htmlFor={formType} className="text-xl text-zinc-700 hidden lgn:block">
                {title}
            </label>

            <div className="flex relative items-center flex-row">
                {children}
                <input
                    className="w-full text-xl text-zinc-500 py-4 pl-14 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-zinc-500 transition-all duration-300 ease-in-out"
                    id={formType}
                    type={formType}
                    name={formType}
                    placeholder={placeholder}
                    required
                />
            </div>
        </div>
    );
};

export default MyComponent;