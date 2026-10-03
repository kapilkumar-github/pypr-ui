import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
    Download,
    Filter,
    FilterIcon,
    Search,
    SlidersHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ContactsToolbar = () => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="relative max-w-sm flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    placeholder="Search contacts..."
                    className="
                h-10 pl-9
                border-none
                bg-primary-med-tint
                text-primary-grey
                focus-visible:outline-none
                focus-visible:ring-0
                focus-visible:ring-offset-0
            "
                />
            </div>

            {/* Dropdown */}
            <div className="flex gap-1 flex-1 h-full [height:stretch]" style={{ height: "stretch" }}>
                <div className="flex items-center bg-primary-med-tint">
                    <span className="pl-2 text-primary-grey text-sm">Status:</span>
                    <Select defaultValue="all">
                        <SelectTrigger
                            className="
                            h-full
                            [height:stretch]
                            w-[160px]
                            border-none
                            focus-visible:outline-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                        " style={{ height: "stretch" }}
                        >
                            <SelectValue placeholder="All contacts" />
                        </SelectTrigger>

                        <SelectContent className="border-none bg-primary-med-tint 
                            text-black">
                            <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                <SelectItem value="all">All contacts</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="paused">Paused</SelectItem>
                                <SelectItem value="unsubscribed">Unsubscribed</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center bg-primary-med-tint">
                    <span className="pl-2 text-primary-grey text-sm">Owner:</span>
                    <Select defaultValue="all">
                        <SelectTrigger
                            className="
                            h-full
                            [height:stretch]
                            w-[160px]
                            border-none
                            bg-primary-med-tint
                            focus-visible:outline-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                        " style={{ height: "stretch" }}
                        >
                            <SelectValue placeholder="All owners" />
                        </SelectTrigger>

                        <SelectContent className="border-none bg-primary-med-tint">
                            <SelectItem value="all">All owners</SelectItem>
                            <SelectItem value="active">Kapil</SelectItem>
                            <SelectItem value="paused">Pihu</SelectItem>
                            <SelectItem value="unsubscribed">Edharya</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex justify-end">
                <div>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant={"secondary"} size={"icon-lg"} className="cursor-pointer bg-primary-med-tint">
                                <SlidersHorizontal />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Advance Filters
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default ContactsToolbar;