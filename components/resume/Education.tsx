import React from "react";
import InformationCard from "../InformationCard";

const Education = () => {
    return (
        <div className="pt-[20px]">
            <div className="education grid grid-cols-2 gap-4">
                {/* Ahsanullah University of Science and Technology */}
                <InformationCard
                    title={"Ahsanullah University of Science and Technology"}
                    subtitleInfo={"BSc in Computer Science and Engineering"}
                    cgpa={"3.33/4"}
                >
                    <p className="text-justify">
                        I completed my Bachelor of Science in Computer Science and Engineering (CSE) at Ahsanullah University of Science and Technology, Bangladesh. 
                    </p>
                    <p className="text-justify">
                        This program provided me with a solid foundation in software engineering, algorithms, databases, and web development. It also helped me develop practical problem-solving skills through various projects and internships.
                    </p>
                </InformationCard>

                {/* St. Joseph Higher Secondary School */}
                <InformationCard
                    title={"St. Joseph Higher Secondary School"}
                    subtitleInfo={"Higher Secondary Certificate (HSC) in Science"}
                    cgpa={"5.00/5.00"}
                >
                    <p className="text-justify">
                        I completed my Higher Secondary Certificate (HSC) in Science at St. Joseph Higher Secondary School.
                    </p>
                    <p className="text-justify">
                        I focused on subjects like Mathematics, Physics, Chemistry, and Biology. This experience built the academic foundation necessary for pursuing engineering studies and honed my analytical skills.
                    </p>
                </InformationCard>

                {/* Rowmari C.G. Zaman High School */}
                <InformationCard
                    title={"Rowmari C.G. Zaman High School"}
                    subtitleInfo={"Secondary School Certificate (SSC) in Science"}
                    cgpa={"5.00/5.00"}
                >
                    <p className="text-justify">
                        I earned my Secondary School Certificate (SSC) in Science from Rowmari C.G. Zaman High School.
                    </p>
                    <p className="text-justify"> 
                        During this time, I developed an interest in technology and programming, which eventually motivated me to pursue a career in computer science. My achievements included excellent results in science and mathematics subjects.
                    </p>
                </InformationCard>
            </div>
        </div>
    );
};

export default Education;
