
// import courses from '@/data/courseData';
import Programming from './Programming';
import cheatsheets from '@/data/cheatsheetsData';

function ProgrammingLanguage(){
    return <div>
        <Programming courses={cheatsheets} />
    </div>
}

export default ProgrammingLanguage;