import { ChartNoAxesColumn, ChartNoAxesCombined, LucideIcon, TrendingDown, UserGroup } from "lucide-react";

const stats = [
    {
        label: "Total Prospects",
        icon: <UserGroup />,
        value: "12,482",
        secondaryValue: "vs 1,270 LW",
        outcome: ""
    },
    {
        label: "Active",
        value: "11,930",
    },
    {
        label: "Unsubscribed",
        value: "128",
    },
    {
        label: "Enrolled",
        value: "4,820",
    },
];

const ContactsStats = () => {
    const thisWeekContacts = 1428;
    const lastWeekContacts = 1270;
    const totalContactsPercentage = Math.floor(thisWeekContacts / lastWeekContacts * 100);
    const isPositive = thisWeekContacts >= lastWeekContacts;
    const totalContactStat = () => (
        <div className={`inline-flex items-center gap-1 rounded-full py-0.5 px-2  font-bold  text-[0.7rem] tracking-[1.2px] ${isPositive ?
            'text-primary bg-primary-muted' : 'text-red-500 bg-red-100'
            }`}>
            {!isPositive ? <TrendingDown className="size-3" strokeWidth={2} /> : <TrendingUp className="size-3" strokeWidth={2} />}
            {!isPositive ? "-" : "+"}{totalContactsPercentage}%
        </div>)
    return (
        <div className="flex gap-2 p-1 rounded-sm">
            <MetricCard
                label="Total Contacts"
                value={"" + (lastWeekContacts + thisWeekContacts)} // This has to be total count coming from backend
                StatChildren={totalContactStat()}
                progress={totalContactsPercentage}
                bottomLabel={`vs ${lastWeekContacts} LW`}
                CardMetricIcon={UserGroup}
            />
            <MetricCard
                label="Replay"
                value="28.4%" // This has to be total count coming from backend
                StatChildren={totalContactStat()}
                progress={totalContactsPercentage}
                bottomLabel={`vs avg`}
                CardMetricIcon={ChartNoAxesCombined}
            />
        </div>
    );
};

export default ContactsStats;

import { TrendingUp } from "lucide-react";
import { JSX, ReactElement, ReactNode } from "react";

interface MetricCardProps {
    label?: string;
    value?: string;
    growth?: string;
    progress?: number;
    bottomLabel?: string;
    bottomValue?: string;
    StatChildren?: ReactElement;
    CardMetricIcon: LucideIcon;
}

export function MetricCard({
    label = "Total Prospects",
    value = "2,480",
    progress = 74,
    bottomLabel = "THIS MONTH",
    CardMetricIcon = UserGroup,
    StatChildren = <div></div>
}: MetricCardProps) {
    return (
        <div className="w-[236px] rounded-sm bg-white p-2 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-primary-grey tracking-[0.55px] uppercase text-[11px] font-semibold">
                    {label}
                </div>
                <div className="flex size-7 items-center justify-center rounded bg-primary-med-tint">
                    <CardMetricIcon className="size-4 text-primary" />
                </div>
            </div>

            <div className="mt-2 flex justify-between items-baseline">
                {/* Main metric */}
                <div className="font-bold text-[2rem]">
                    {value}
                </div>

                {StatChildren}
            </div>

            <div className="flex items-baseline gap-3">
                {/* Progress */}
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary-med-tint">
                    <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Bottom */}
                <div className="shrink-0 text-right tracking-[0.55px]">
                    <span className="text-xs text-gray-500">
                        {bottomLabel}
                    </span>
                </div>
            </div>
        </div>
    );
}