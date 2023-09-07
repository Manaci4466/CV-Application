import {Card,Input,PrintField,PrintFieldCard} from './utils';
import '../styles/style.css';
import {clear} from '../src/functionality'

function CardWrapper({sumbitHandler,info}) {

    function editHandler() {
        let obj = {};
        const inputs = document.querySelectorAll('input');
        for(let i = 0; i < 3; i++){
            Object.assign(obj,Object.values(info)[i])
        }
        inputs.forEach((el,index) => {
            el.value = Object.values(obj)[index];
        })
    }

    return (
        <main>
            {/* /***GENERAL INFORMATION***/ }
            <section className="section">
                <Card headingText="General Information">
                    <Input label="Name" type="text" />
                    <Input label="LastName" type="text" />
                    <Input label="Email" type="email" />
                    <Input label="Phone Number" type="tel" />
                </Card>
            </section>
            {/* /***EDUCATIONAL INFORMATION***/ }
            <section className="section">
                <Card headingText="Educational Experience">
                    <Input label="School Name" type="text" />
                    <Input label="Title of Study" type="text" />
                    <Input label="Date of Study" type="date" />
                </Card>
            </section>
            <section className="section">
            {/* /***Practical Experience***/ }
                <Card headingText="Practical Experience">
                    <Input label="Company Name" type="text" />
                    <Input label="Position of Title" type="text" />
                    <Input label="Responsibility" type="text" />
                    <Input label="Start of Study" type="date" />
                    <Input label="End of Study" type="date" />
                </Card>
            </section>
            <button aria-label='BUTTON' onClick={sumbitHandler}>Submit</button>
            <button aria-label='BUTTON' onClick={editHandler}>Edit</button>
        </main>
        );
}

function CvPage({info}){
    if(Object.keys(info).length === 0){
        return( <section className="cv-page">
    <section>
        {/* /***GENERAL INFORMATION***/ }
        <PrintFieldCard className="general-information" headingText="General Information">
            <PrintField />
            <PrintField  />
            <PrintField  />
            <PrintField  />
        </PrintFieldCard>
        {/* /***EDUCATIONAL INFORMATION***/ }
        <PrintFieldCard className="educational-inforamtion" headingText="Educational Information">
            <PrintField />
            <PrintField  />
            <PrintField  />
        </PrintFieldCard>
        {/* /***Practical Experience***/ }
        <PrintFieldCard className="practical-experience" headingText="Practical Experience">
            <PrintField  />
            <PrintField />
            <PrintField  />
            <PrintField />
            <PrintField  />
        </PrintFieldCard>
    </section>
    </section>); 
    }else {

    return( <section className="cv-page">
    <section>
        {/* /***GENERAL INFORMATION***/ }
        <PrintFieldCard headingText="General Information">
            <PrintField label={'Name'} fieldText={info.generalInfo.name || ''} />
            <PrintField label={'LastName'}fieldText={info.generalInfo.lastName} />
            <PrintField label={'Email'}fieldText={info.generalInfo.email} />
            <PrintField label={'Phone-Number'}fieldText={info.generalInfo.phone} />
        </PrintFieldCard>
        {/* /***EDUCATIONAL INFORMATION***/ }
        <PrintFieldCard headingText="Educational Information">
            <PrintField label={'School-Name'}fieldText={info.educationalInfo.schoolName} />
            <PrintField label={'Title-of-Study'}fieldText={info.educationalInfo.titleOfStudy} />
            <PrintField label={'Date-of-Study'}fieldText={info.educationalInfo.dateOfStudy} />
        </PrintFieldCard>
        {/* /***Practical Experience***/ }
        <PrintFieldCard headingText="Practical Experience">
            <PrintField label={'Company-Name'}fieldText={info.practicalInfo.companyName} />
            <PrintField label={'Position-of-Title'}fieldText={info.practicalInfo.positionOfTitle} />
            <PrintField label={'Responsibility'}fieldText={info.practicalInfo.responsibility} />
            <PrintField label={'Start-of-Study'}fieldText={info.practicalInfo.startOfStudy} />
            <PrintField label={'End-of-Study'}fieldText={info.practicalInfo.endOfStudy} />
        </PrintFieldCard>
    </section>
    </section>); 
    }
}

export{CardWrapper,CvPage};