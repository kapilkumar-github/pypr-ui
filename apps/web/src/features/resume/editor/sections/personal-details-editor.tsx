import AppFormField from "@/components/app-ui/app-form-field";

export default function PersonalDetailsEditor() {
    return <div className="grid grid-cols-2 gap-4">
        <AppFormField label="First name" value="" placeholder="John" onChange={() => { }} />
        <AppFormField label="Last name" value="" placeholder="Doe" onChange={() => { }} />
        <AppFormField label="Title" value="" placeholder="Senior Software Engineer" onChange={() => { }} />
        <AppFormField label="Email" value="" placeholder="john.doe@example.com" onChange={() => { }} />
        <AppFormField label="Phone" value="" placeholder="(123) 456-7890" onChange={() => { }} />
        <AppFormField label="Linkedin URL" value="" placeholder="https://www.linkedin.com/in/johndoe" onChange={() => { }} />
        <AppFormField label="Postal Code" value="" placeholder="12345" onChange={() => { }} />
        <AppFormField label="City" value="" placeholder="New York" onChange={() => { }} />
        <AppFormField label="State" value="" placeholder="NY" onChange={() => { }} />
        <AppFormField label="Country" value="" placeholder="United States" onChange={() => { }} />
    </div>
}