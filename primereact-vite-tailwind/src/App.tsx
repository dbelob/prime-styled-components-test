import * as React from 'react';
import { Button } from '@primereact/ui/button';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import './App.css';

const languages = [
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' },
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
                <InputText placeholder='Enter text' />
            </div>
            <div className='my-4'>
                <Select.Root
                    value={language}
                    onValueChange={(e: SelectValueChangeEvent) =>
                        setLanguage(e.value as string)
                    }
                    options={languages}
                    optionLabel='label'
                    optionValue='value'
                >
                    <Select.Trigger>
                        <Select.Value placeholder='Select a language' />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
            </div>
        </>
    );
}
