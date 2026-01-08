import "./estilus.css"

import { ArrowRight, Instagram, Linkedin, X } from "lucide-react"
import { useNavigate } from 'react-router';

import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"

import React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export const Contacto = () => {

    const navigate = useNavigate()
    

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div>
         <button
            className="fixed top-5 right-5 w-12 h-12 bg-gray-500 flex items-center justify-center border border-gray-300 hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')}
            >
                <ArrowRight className="w-7 h-7 text-gray-300"/>
          </button>

        
          <div>
            
            <div className="flex justify-center">

              <div className="font-serif text-white text-2xl  md:text-3xl lg:text-3xl  transition-all absolute mt-50 ">
              <p>No te pierdas ningún trabajo
                <p>y sigueme en mis redes sociales.</p>
              </p>

              <div className="absolute text-center md:text-left text-gray-400 flex flex-col">
                <div className="text-white flex mt-17 ml-35 gap-8">
            
                  <X className="x-10 h-10 hover:text-gray-500"/>
                  <button>
                    <a href="https://www.instagram.com/marcosmv.tattoo/">
                      <Instagram className="x-10 h-10 hover:text-gray-500"/>
                    </a>
                  </button>
              
                  <Linkedin className="x-10 h-10 hover:text-gray-500"/>
                  
                  
                </div>
              </div>

              </div>


            </div>
            
            
              <div className="titulo-Cn">

                <h1 className="text-7xl md:text-7xl lg:text-8xl  z-10 transition-all">Contacto</h1>


                <div className="contacto2 bg-black h-150 w-screen flex items-end ">


                  <div>
          
                        {/* //contacto */}
                            <div className="hidden lg:block md:flex-col  ">
                                  
                                <div className="info text-white ml-3 mb-2.5">
                                    <p className="">

                                      +34 683-162-622

                                    </p>
                                    <p className="">

                                      marcosmv.tattoo@gmail.com

                                    </p>
                                    <p className="">

                                      Marcos Martin, Valencia
                                      
                                    </p>
                                </div>
                            </div>


                  </div>

                </div>
              </div>

              <div className="contacto"style={{height: '50rem'}}>
                <p className="text-3xl md:text-4xl lg:text-5xl z-10 transition-all">Agenda tu primera cita y hablemos sobre tu proyecto</p>

                 <div className="flex flex-row gap-25">
                  

                  {/* //calendario */}
                    <div className="hidden md:block calendario">
                          <div className="flex flex-col gap-3">
                              <Label htmlFor="date-picker" className="px-1 text-white">
                                Date
                              </Label>

                              <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    id="date-picker"
                                    className="w-32 justify-between font-normal"
                                  >
                                    {date ? date.toLocaleDateString() : "Select date"}
                                    <ChevronDownIcon />
                                  </Button>
                                </PopoverTrigger>

                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    className="rounded-md border shadow-sm flex "
                                    selected={date}
                                    disabled={ date => date < new Date() }
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                      setDate(date)
                                      setOpen(false)
                                    }}
                                  />
                                </PopoverContent>

                              </Popover>
                            </div>

                            <div className="flex flex-col gap-3">
                              <Label htmlFor="time-picker" className="px-1 text-white">
                                Time
                              </Label>
                              <Input
                                type="time"
                                id="time-picker"
                                step="1"
                                defaultValue="10:30:00"
                                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                              />
                          </div>

                    </div>

                   {/* //formulario */}

                      <div className="formulario">
                          <form  className="size-110 space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
                            <div className="space-y-2">

                              <Label htmlFor="nombre">Nombre</Label>
                              
                              <Input id='nombre' required/>

                            </div>
                            
                            <div className="space-y-2">
                          
                              <Label htmlFor="apellidos">Apellidos</Label>
                              
                              <Input id='apellidos' required/>
                            </div>

                            <div className="space-y-2">
                              
                              <Label>Estilo de tattoo</Label>

                              <Select required>
                                <SelectTrigger className="border-gray-200 bg-white text-gray-900">
                                  <SelectValue placeholder="Selecciona un estilo" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Tattoos</SelectLabel>
                                    <SelectItem value="old school">old school</SelectItem>
                                    <SelectItem value="fine line">fine line</SelectItem>
                                    <SelectItem value="blackwork">blackwork</SelectItem>
                                    <SelectItem value="realismo">realismo</SelectItem>
                                    <SelectItem value="tribal">tribal</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              
                            </div>

                            <div className="space-y-6">

                              <Label htmlFor="correo">Informacion extra</Label>
                              
                              <Input id='correo'/> 

                            </div>

                            <Button 
                            type="submit"
                            className="w-full bg-gray-600"
                            >
                              Enviar cita
                            </Button>
                          
                          </form>
                        </div>

                         {/* //mapa */}

                      <div className="hidden lg:block  rounded-lg overflow-hidden shadow-lg">

                        <div className="mapa aspect-square size-120 ">

                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.2148554300215!2d-0.3942102245647495!3d39.48706281169768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60453850c804e9%3A0x24a8f1422ac71bee!2sBlack%20Drip%20Tattoo%20Studio!5e0!3m2!1ses!2ses!4v1765480063655!5m2!1ses!2ses" 
                                className="w-full h-full rounded-lg" 
                                style={{border: 0}} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                                </iframe>

                        </div>

                      </div>
                      
                  </div>        
              </div>

          </div>

          

             
    </div>

    
  )
}
