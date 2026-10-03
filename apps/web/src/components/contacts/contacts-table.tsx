"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import ContactAvatar from "./contact-avatar";
import { useContacts } from "@/hooks/contacts/use-contacts";

const ContactsTable = () => {
    const {
        data: contacts,
        isLoading,
        isError,
    } = useContacts();

    if (isLoading) {
        return <div>Loading contacts...</div>;
    }

    if (isError) {
        return <div>Unable to load contacts.</div>;
    }
    return (
        <div className="rounded-lg border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Contact</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Job title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">
                            Last activity
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {contacts?.map((contact) => (
                        <TableRow key={contact.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <ContactAvatar
                                        firstName={contact.firstName}
                                        lastName={contact.lastName}
                                    />

                                    <div>
                                        <div className="font-medium">
                                            {contact.firstName}{" "}
                                            {contact.lastName}
                                        </div>

                                        <div className="text-xs text-muted-foreground">
                                            {contact.email}
                                        </div>
                                    </div>
                                </div>
                            </TableCell>

                            <TableCell>
                                {contact.companyName}
                            </TableCell>

                            <TableCell>
                                {contact.jobTitle}
                            </TableCell>

                            <TableCell>
                                <span className="text-sm">
                                    {contact.status}
                                </span>
                            </TableCell>

                            <TableCell className="text-right text-sm text-muted-foreground">
                                2 hours ago
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ContactsTable;