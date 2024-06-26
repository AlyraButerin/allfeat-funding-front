'use client'

import { Input } from '../elements/Input'
import { Button } from '../elements/Button'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAccount } from 'wagmi'
import { useState } from 'react'
const currentDate = new Date();

interface IFormData {
    address: `0x${string}`
    name: string
    currentDate: string
    alias?: string
    image?: string
}

const CreateArtist = (
    {
        title,
        description,
        titleHighlight,
        boxClasses = '',
    }:
    {
        title: string,
        description?: string,
        titleHighlight?: boolean,
        boxClasses?: string,
    }
) => {
    const { address } = useAccount()
    const { theme } = useThemeContext()
    const [formData, setFormData] = useState<IFormData>({
        address: address || '0x',
        name: '',
        currentDate: currentDate.toLocaleString(),
        alias: '',
        image: ''
      });

    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // 
        // Interact with blockchain to save artist
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
                    <h1 className={`font-semibold ${titleHighlight && 'text-pink-600'}`}>{title}</h1>
                    {description && <p className='text-sm mt-3'>{description}</p>}
                    
                    <Input props={{
                        id: "name", name: "name", placeHolder: "Enter your name", label: "Your name",
                        value: formData.name, onChange: handleChange, required: true,
                        classes: { box: `mt-6`, input: `mt-2` }
                    }} />

                    <Input props={{
                        id: "alias", name: "alias", placeHolder: "Enter your alias", 
                        label: "Your Alias (Optional)",
                        value: formData.alias, onChange: handleChange,
                        classes: { box: 'mt-5 relative', input: 'mt-2' }
                    }} />

                    <Input props={{
                        id: "image", name: "image", type: "file",  label: "Upload your Avatar (Optional)",
                        ref: formData.image, value: formData.image,
                        onChange: handleChange,
                        classes: { box: 'mt-5 relative', input: 'mt-2' }
                    }}><p className='text-center'>{formData.image}</p>
                    </Input>


                    <div className="mt-8 relative flex font-normal text-sm gap-4 justify-end">
                        <Button props={{ 
                            extendClasses: theme?.bgBtnSecondary,
                        }}>Save</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export { CreateArtist }
