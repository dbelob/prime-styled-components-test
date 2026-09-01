import * as React from 'react';
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
import './App.css';

const languages = [
    { label: 'Select your language', value: '' },
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' }
];

export default function App() {
    const [language, setLanguage] = React.useState<string>('');

    return (
        <>
            <h1>PrimeReact (with Tailwind)</h1>
            <div className='my-4'>
                <Button>Check</Button>
            </div>
            <div className='my-4'>
                <InputText placeholder='Enter text' className={'w-auto'}/>
            </div>
            <div className='my-4'>
                <Select
                    value={language}
                    onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                    options={languages}
                    optionLabel="label"
                    optionValue="value"
                    className="md:w-56"
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList>
                                    {languages.map((language, index) => (
                                        <SelectOption key={index} index={index}>
                                            {language.label}
                                        </SelectOption>
                                    ))}
                                </SelectList>
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
            </div>
        </>
    );
}
