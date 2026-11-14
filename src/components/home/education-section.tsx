import { Button } from "@/components/ui/button";
import { Badge } from "@/components/spell-ui/badge";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent
} from "../ui/card";
import { portfolioData } from "@/lib/site-content";
import {
    IconCalendar,
    IconAward,
    IconExternalLink
} from "@tabler/icons-react";
import { PiStudentBold } from "react-icons/pi";

export function EducationSection() {
    const { education } = portfolioData;

    return (
        <section className="space-y-4">
            <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                    <PiStudentBold className="size-10 shrink-0 text-chart-1" />
                    <h2 className="text-3xl font-bold tracking-tight">
                        Education
                    </h2>
                </div>
                <p className="text-muted-foreground">
                    Academic background in software engineering, system architecture, and full-stack development.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="relative overflow-hidden border-border/80 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-4" />
                    <CardHeader className="pb-3">
                        <div className="flex items-start gap-3.5">
                            <div className="space-y-1">
                                <CardTitle className="text-xl font-bold leading-snug">
                                    {education.degree}
                                </CardTitle>
                                <CardDescription className="text-sm font-medium text-muted-foreground">
                                    {education.institution}
                                </CardDescription>
                            </div>
                        </div>
                        <CardAction>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-1.5 text-xs font-medium hover:border-primary/50 hover:bg-primary/10"
                                render={
                                    <a
                                        href="https://fateccruzeiro.edu.br/"
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                }
                            >
                                Visit
                                <IconExternalLink className="size-3.5" />
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/80 px-2.5 py-1 text-muted-foreground">
                                <IconCalendar className="size-3.5 text-chart-1" />
                                {education.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-chart-2/30 bg-chart-2/10 px-2.5 py-1 font-semibold text-chart-2">
                                <IconAward className="size-3.5" />
                                GPA: {education.gpa}
                            </span>
                        </div>
                        {education.details && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {education.details}
                            </p>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-2.5 border-t border-border/60 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {education.relevantCoursework.map((course) => (
                                <Badge
                                    key={course}
                                    variant="secondary"
                                    className="border border-border/60 bg-secondary/60 px-2.5 py-1 text-xs font-normal text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10"
                                >
                                    {course}
                                </Badge>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
                <Card className="border-border/80 shadow-md">
                    <CardContent className="pt-6">
                        teste
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}