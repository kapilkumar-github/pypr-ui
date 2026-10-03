type ContactAvatarProps = {
    firstName: string;
    lastName?: string;
};

const ContactAvatar = ({
    firstName,
    lastName,
}: ContactAvatarProps) => {
    const initials =
        `${firstName.charAt(0)}${lastName?.charAt(0) ?? ""}`.toUpperCase();

    return (
        <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
            {initials}
        </div>
    );
};

export default ContactAvatar;