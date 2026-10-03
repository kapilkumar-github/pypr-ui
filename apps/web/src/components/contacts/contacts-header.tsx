import { Button } from "@/components/ui/button";
import { Download, Plus, Upload, UserPlus } from "lucide-react";

const ContactsHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-md font-semibold tracking-tight">
                    Contacts
                </h1>
            </div>
            <div className="flex gap-2">
                <Button variant="secondary">
                    <Upload />
                    Import CSV
                </Button>

                <Button>
                    <UserPlus />
                    Add contact
                </Button>
            </div>
        </div>
    );
};

export default ContactsHeader;