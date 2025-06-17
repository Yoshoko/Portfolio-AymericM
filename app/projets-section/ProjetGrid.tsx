'use client'
import { useEffect, useState } from "react"
import ProjetCard from "./ProjetCard"
import { supabase } from "../utils/supabase"
import {ProjetProps} from "./projetDetails";

const ProjetGrid = () => {
  const [projects, setProjects] = useState<ProjetProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true })

        console.clear();
        console.log(data);

        if (error) throw error
        setProjects(data || [])
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) return <div>Chargement des projets...</div>

  return (
    <>
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {projects.map((projet: ProjetProps) => (
          <ProjetCard
            id={projet.id}
            key={projet.id}
            name={projet.name}
            description={projet.description}
            technologies={projet.technologies}
            github={projet.github}
            image={projet.image}
            available={projet.available}
          />
        ))}
      </div>
    </>
  )
}

export default ProjetGrid