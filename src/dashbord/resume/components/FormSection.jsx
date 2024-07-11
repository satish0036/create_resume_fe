import React, { useEffect, useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutDashboard } from 'lucide-react'
import Summery from './forms/Summery'
import Experience from './forms/Experience'
import Education from './forms/Education'
import Skills from './forms/Skills'
import { Navigate, useParams } from 'react-router-dom'
import ThemeColor from './ThemeColor'
import ThemeLayout from './ThemeLayout'
import GlobalApi from '@/serverAction/GlobalApi'
import Project from './forms/Project'

const FormSection = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [enableNext, setEnableNext] = useState(true)
  const [resumeName, setResumeName] = useState("")
  const { resumeId } = useParams()


  useEffect(() => {
    const data = {
      resumeId: resumeId
    }


    GlobalApi.GetUserResumesByResumeId(data).then((res) => {
      // console.log(res)
      setResumeName(res.data?.data?.title)
    }, (err) => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <div className=' flex flex-wrap gap-2 justify-between'>
        <Button variant="outline" className=" flex gap-2 " size="sm"> {resumeName}</Button>

        <ThemeColor />
        <ThemeLayout />

        <div className=' flex gap-2'>
          {
            activeIndex > 1 && <Button onClick={() => setActiveIndex(activeIndex - 1)} ><ArrowLeft /></Button>
          }
          <Button disabled={!enableNext} className="flex gap-2" onClick={() => setActiveIndex(activeIndex + 1)} >Next <ArrowRight /></Button>
        </div>
      </div>
      {/* PersonalDetail */}
      {
        activeIndex === 1 && <PersonalDetail enableNext={(v) => setEnableNext(v)} />
      }

      {/* Summary  */}
      {
        activeIndex === 2 && <Summery enableNext={(v) => setEnableNext(v)} />
      }


      {/* experriance */}
      {
        activeIndex === 3 && <Experience enableNext={(v) => setEnableNext(v)} />
      }

  {/* education */}
  {
        activeIndex === 4 && <Project enableNext={(v) => setEnableNext(v)} />
      }

      {/* education */}
      {
        activeIndex === 5 && <Education enableNext={(v) => setEnableNext(v)} />
      }


      {/* Skill */}
      {
        activeIndex === 6 && <Skills enableNext={(v) => setEnableNext(v)} />
      }
      {/* Skill */}
      {
        activeIndex === 7 && <Navigate to={"/my-resume/"+resumeId+"/view"} />
      }
    </div>
  )
}

export default FormSection