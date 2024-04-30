import React, { useState, useEffect, useRef, Children } from 'react';


import styles from "../styles/topheader.module.css";


interface Option {
    value: string;
    label: string;
}

const TopHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
 

    const options: Option[] = [
        { value: 'option1', label: 'English' },
        { value: 'option2', label: 'Spanish' },
        { value: 'option3', label: 'French' }
    ];

    useEffect(() => {
        setSelectedOption(options.find(option => option.value === 'option1') ?? null);
    }, []);

    useEffect(() => {
    
        const handleClickOutside = (event: MouseEvent) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.topHeader}>
            <div className={styles.empty}></div>
            
            <div className={styles.SummerSale}> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href=""> Shop Now</a></div>
            <div className={styles.languages}>
                <div className={styles.selectedOption} onClick={handleOptionClick}>
                    {selectedOption ? (
                        <span>
                            <span>{selectedOption.label}</span>
                            <span className={styles.arrowIcon} style={{ color: isOpen ? 'white' : 'white' }}>{isOpen ? '▲' : '▼'}</span>
                        </span>
                    ) : 'Select Language'}
                </div>
                <div ref={optionsRef} className={styles.options} style={{ display: isOpen ? 'block' : 'none' }}>
                    {options.map((option) => (
                        
                        option.value !== selectedOption?.value && (
                            <div key={option.value} onClick={() => handleSelect(option)}>
                                {option.label}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
