import React from 'react'
import { categories, communes, cours, wilayas } from './constants'
import BasicSelect from './Select'
import RadioButtons from './Radio'

const Filters = () => {
  return (
    <div className='lg2:flex hidden flex-col space-y-8 md:w-[16%] sm:w-[50%] text-dark items-start'>
      <p>Filtrer les résultats</p>
      <BasicSelect name='Catégorie' list={categories}/>
      <BasicSelect name='Cours' list={cours}/>
      <RadioButtons />
      <BasicSelect name='Wilaya' list={wilayas}/>
      <BasicSelect name='Commune' list={communes}/>
      <button className='w-full bg-secondary text-white font-bold py-1 px-4 rounded'>Appliquer</button>
    </div>
  )
}

export default Filters