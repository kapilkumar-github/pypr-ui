type FormFieldProps = {
    label: string;
    value: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    onChange: (value: string) => void;
};

export default function AppFormField({
    label,
    value,
    placeholder,
    type = "text",
    onChange,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font text-foreground" htmlFor={label}>
                {label}
            </label>

            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
                className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
        </div>
    );
}