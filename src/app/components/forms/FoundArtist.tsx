'use client'

import { Input } from '../elements/Input'
import { Button } from '../elements/Button'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAccount } from 'wagmi'
import { useState } from 'react'
const currentDate = new Date();

interface IFormData {
    address: `0x${string}`
    artist: string
    project: string
    amount: string
    currentDate: string
}

const FoundArtist = (
    {
        title,
        titleHighlight,
        boxClasses = '',
    }:
    {
        title: string,
        titleHighlight?: boolean,
        boxClasses?: string,
    }
) => {
    const { address } = useAccount()
    const { theme } = useThemeContext()
    const [formData, setFormData] = useState<IFormData>({
        address: address || '0x',
        artist: '',
        project: '',
        amount: "0",
        currentDate: currentDate.toLocaleString(),
      });

    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // 
        // Interact with blockchain to found artist/project
        // 
        console.log(formData);
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className={`${boxClasses} relative flex flex-col w-[24rem] 
                    border dark:border-slate-700 border-slate-300 rounded-lg p-6
                    ${theme?.bgForm}`
                }>
                    <h1 className={`ui-h1 ${titleHighlight && 'text-pink-600'}`}>{title}</h1>

                    <Input props={{
                        id: "artist", name: "artist", placeHolder: "Artist name", label: "Artist name ",
                        value: formData.artist, onChange: handleChange,
                        classes: { box: `mt-6`, input: `mt-2` }
                    }} />

                    <Input props={{
                        id: "project", name: "project", placeHolder: "The project name", label: "Project name",
                        value: formData.project, onChange: handleChange,
                        classes: { box: 'mt-5 relative', input: 'mt-2' }
                    }} />
 
                    <Input props={{
                        id: "amount", name: "amount", placeHolder: "The amount in euro", label: "The amount",
                        value: formData.amount, onChange: handleChange,
                        classes: { box: 'mt-5 relative', input: 'mt-2' }
                    }} />
                    

                    <div className="mt-8 relative flex font-normal text-sm gap-4 justify-end">
                        <Button props={{ 
                            extendClasses: theme?.bgBtnSecondary,
                        }}>Send money</Button>                        
                    </div>
                </div>
            </form>
        </div>
    )
}


export { FoundArtist }
