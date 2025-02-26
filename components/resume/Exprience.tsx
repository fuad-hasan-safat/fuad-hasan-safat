import React from 'react';
import InformationCard from '../InformationCard';

const Exprience = () => {
  return (
   <div className='pt-[20px]'>
        <div  className="education flex flex-row flex-wrap justify-between">
            
        <InformationCard title={'Live Media Ltd.'} subtitleInfo={'1+ year of exprience of being full stack devloper'} cgpa={'****'}  >
            <p>I work here as a associate software devloper</p>
            <p>I wokrk in both fontend and backend. the technology I am using here, Next Js, Node Js, Express js, Deno Js, Bun Js, Elysia Js.</p>
        </InformationCard>

        {/* <InformationCard title={'St. Joseph Higher Secondary School'} subtitleInfo={'Intermideate school'} cgpa={'5/5'}  >
            <p> Here i complete My BSc</p>
            <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>

        </InformationCard>


        <InformationCard title={'Rowmari C.G Zaman High School'} subtitleInfo={'Secondary School'} cgpa={'5/5'}  >
            <p> Here i complete My BSc</p>
            <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>

        </InformationCard> */}

        </div>
   </div>
  );
};

export default Exprience;
