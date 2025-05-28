import React from 'react';

const getCarLogo = (make: string) => {
    const logos: { [key: string]: string } = {
        'tesla': '🚗',
        'ford': '🚙',
        'toyota': '🚕',
        'chevrolet': '🚐',
        'bmw': '🏎️',
        'mercedes': '🚘',
        'audi': '🚗',
        'honda': '🚙'
    };
    
    return logos[make.toLowerCase()] || '🚗';
};

function CompanyLogoRenderer(params: { value: string; }) {
    return (
        <span className="flex items-center justify-center">
            {params.value && getCarLogo(params.value)}
        </span>
    );
}

export default CompanyLogoRenderer;