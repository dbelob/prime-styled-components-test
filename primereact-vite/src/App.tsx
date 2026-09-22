import * as React from 'react';
import {
    ArrowDownLeftAndArrowUpRightToCenter,
    ArrowsH,
    ArrowsV,
    ArrowUpRightAndArrowDownLeftFromCenter,
    ChevronLeft,
    ChevronRight,
    Download,
    Replay,
    SearchMinus,
    SearchPlus
} from '@primeicons/react';
import { Button } from '@primereact/ui/button';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Gallery } from '@primereact/ui/gallery';
import { InputText } from '@primereact/ui/inputtext';
import { Refresh } from '@primeicons/react/refresh';
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
            <h1>PrimeReact (without Tailwind)</h1>
            <div style={{ margin: '1rem 0 1rem 0' }}>
                <Button>Check</Button>
            </div>
            <div style={{ margin: '1rem 0 1rem 0' }}>
                <InputText placeholder='Enter text' />
            </div>
            <div style={{ margin: '1rem 0 1rem 0' }}>
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
            <div>
                <Gallery.Root className="not-data-fullscreen:h-150!">
                    <Gallery.Backdrop />
                    <Gallery.Prev>
                        <ChevronLeft />
                    </Gallery.Prev>
                    <Gallery.Next>
                        <ChevronRight />
                    </Gallery.Next>
                    <Gallery.Header className="justify-end gap-0.5">
                        <Gallery.RotateLeft>
                            <Replay />
                        </Gallery.RotateLeft>
                        <Gallery.RotateRight>
                            <Refresh />
                        </Gallery.RotateRight>
                        <Gallery.ZoomIn>
                            <SearchPlus />
                        </Gallery.ZoomIn>
                        <Gallery.ZoomOut>
                            <SearchMinus />
                        </Gallery.ZoomOut>
                        <Gallery.FlipX>
                            <ArrowsH />
                        </Gallery.FlipX>
                        <Gallery.FlipY>
                            <ArrowsV />
                        </Gallery.FlipY>
                        <Gallery.Download>
                            <Download />
                        </Gallery.Download>
                        <Gallery.FullScreen className="group">
                            <ArrowUpRightAndArrowDownLeftFromCenter className="group-data-fullscreen:hidden!" />
                            <ArrowDownLeftAndArrowUpRightToCenter className="hidden! group-data-fullscreen:block!" />
                        </Gallery.FullScreen>
                    </Gallery.Header>
                    <Gallery.Content>
                        {images.map((image) => (
                            <Gallery.Item key={image}>
                                <img src={image} alt="image" />
                            </Gallery.Item>
                        ))}
                    </Gallery.Content>
                    <Gallery.Footer>
                        <Gallery.Thumbnail>
                            <Gallery.ThumbnailContent>
                                {images.map((image, index) => (
                                    <Gallery.ThumbnailItem key={index} index={index}>
                                        <img draggable={false} src={image} className="h-full w-full object-cover" />
                                    </Gallery.ThumbnailItem>
                                ))}
                            </Gallery.ThumbnailContent>
                        </Gallery.Thumbnail>
                    </Gallery.Footer>
                </Gallery.Root>
            </div>
        </>
    );
}

const photos: [number, number, number][] = [
    [10, 1200, 800],
    [11, 800, 1200],
    [15, 1400, 700],
    [16, 700, 1050],
    [17, 1000, 1000],
    [18, 1300, 650],
    [19, 600, 1200],
    [20, 1200, 900],
    [27, 750, 1125],
    [28, 1400, 800],
    [29, 800, 1100],
    [36, 1100, 700],
    [37, 650, 1300],
    [39, 1200, 750],
    [42, 900, 1200],
    [43, 1300, 800],
    [47, 700, 1400],
    [48, 1000, 800],
    [49, 800, 1000],
    [50, 1400, 600],
    [52, 600, 900],
    [53, 1200, 1200],
    [54, 900, 600],
    [55, 750, 1000],
    [56, 1100, 800],
    [57, 1400, 900],
    [58, 850, 1275],
    [59, 1000, 600],
    [60, 600, 1000],
    [64, 1300, 1300]
];

const images = photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);
