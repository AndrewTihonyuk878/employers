import './app-info.css'

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee control, at <b>Luxoft</b> in Wroclaw</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Will receive awards: {increased}</h2>
        </div>
    )
}

export default AppInfo