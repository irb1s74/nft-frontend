import React, {MutableRefObject, useRef, useState} from 'react';
import {Box, Button, Container, IconButton, Stack, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import ImageIcon from '@mui/icons-material/Image';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './Create.scss'

type Inputs = {
    name: string,
    description: string,
};


const Create = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const [file, setFile] = useState('');
    const inputFile = useRef(document.createElement("input")) as MutableRefObject<HTMLInputElement>;

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    const handleChangeImage = () => {
        return () => {
            if (inputFile.current.files) {
                setFile(URL.createObjectURL(inputFile.current.files[0]))
            }
        }
    }
    const handleDeleteImage = () => {
        return () => {
            if (inputFile.current.files) {
                inputFile.current.value = ''
                setFile('')
            }
        }

    }
    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        inputFile.current.files = e.dataTransfer.files
        setFile(URL.createObjectURL(e.dataTransfer.files[0]))
    }

    return (
        <main className='Page'>
            <div className='Create'>
                <Container maxWidth='md'>
                    <Typography sx={{mb: 5}} variant='h4'>Create new Item</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack sx={{
                            mt: 10,
                            mb: 5, width: "100%"
                        }} direction='column' spacing={5}>
                            <label className='drop-label'>
                                <div
                                    onDragStart={(e) => e.preventDefault()}
                                    onDragLeave={(e) => e.preventDefault()}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => onDropHandler(e)}
                                    className='drop-area'
                                >
                                    <div className='image-back'>
                                        {file && (
                                            <img
                                                alt={'loadFile'}
                                                src={file}/>
                                        )}
                                    </div>
                                    <div className='icon'>
                                        <ImageIcon color='secondary' sx={{fontSize: 100}}/>
                                    </div>
                                </div>
                                <input
                                    ref={inputFile}
                                    type='file' accept=".jpeg, .jpg, .png, .gif"
                                    onChange={handleChangeImage()}
                                    hidden
                                />

                                {file && (
                                    <IconButton sx={{position: "absolute", top: '-28px', right: '-28px'}}
                                                className='deleteFile'
                                                onClick={handleDeleteImage()}>
                                        <HighlightOffIcon color='primary'/>
                                    </IconButton>
                                )}
                            </label>
                            <TextField
                                focused
                                required={true}
                                label="Name"
                                error={!!errors?.name}
                                {...register("name", {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 100,
                                })}
                            />
                            <TextField
                                focused
                                required={true}
                                label="Description"
                                error={!!errors?.description}
                                {...register("description", {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 300,
                                })}
                                multiline
                                rows={4}/>
                        </Stack>
                        <Button size={'large'} variant="contained" type="submit">create</Button>
                    </form>
                </Container>
            </div>
        </main>
    )
        ;
};

export default Create;