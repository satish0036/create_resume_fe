import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from '@/serverAction/GlobalApi';
import ResumePreview1 from '../../components/ResumePreview1';

const EditResume = () => {
    const { resumeId } = useParams();

    const [resumeInfo, setResumeInfo] = useState()
    useEffect(() => {
        // setResumeInfo(dummy)
        getResumeInfo()
    }, [])

    const getResumeInfo = async () => {
        try {
            const resp = await GlobalApi.GetResumeById(resumeId);
            // console.log("got all resume data ")
            console.log(resp.data.message)
            setResumeInfo(resp.data.data)
        }
        catch (err) {
            console.log("got err in responce ")
            console.log(err)

        }
    }
    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className=' grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                <FormSection />
            
                {
                    resumeInfo?.themeLayout === "Default" &&
                    <div className='shadow-lg h-full py-4 px-8  border-t-[20px]'
                        style={{  borderColor: resumeInfo?.themeColor}}>
                        <ResumePreview />
                    </div>
                }
                {
                    resumeInfo?.themeLayout !== "Default" &&
                    <div className='shadow-lg h-full'
                        style={{borderColor: resumeInfo?.themeColor}} >
                        <ResumePreview1 />
                    </div>
                }

          
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default EditResume