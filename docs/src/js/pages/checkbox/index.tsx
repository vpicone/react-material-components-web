import * as React from "react";

import { Button } from "@react-mdc/button";
import { Checkbox } from "@react-mdc/checkbox";
import { FormField } from "@react-mdc/form-field";
import { Caption, Typography } from "@react-mdc/typography";

import PageTitle from "app/js/components/page-title";
import { Section } from "app/js/components/section";

type CheckboxState = "checked" | "unchecked" | "indeterminate";

type State = {
    checkbox3State: CheckboxState,
};

export default class CheckboxExample extends React.Component<{}, State> {
    public state: State = {
        checkbox3State: "unchecked",
    };

    public render() {
        return (
            <div>
                <PageTitle>
                    Checkbox Examples
                </PageTitle>
                <Section title="Checkbox">
                    <FormField>
                        <Checkbox inputId="checkbox-1" name="checkbox-1" defaultChecked />
                        <label htmlFor="checkbox-1">
                            Checkbox 1
                        </label>
                    </FormField>
                </Section>
                <Section title="Disabled Checkbox">
                    <FormField>
                        <Checkbox inputId="checkbox-1" name="checkbox-2" disabled />
                        <label htmlFor="checkbox-2">
                            Checkbox 2
                        </label>
                    </FormField>
                </Section>
                <Section title="Checkbox Controlled by React State">
                    <Typography>
                        <Caption>State: {this.state.checkbox3State}</Caption>
                    </Typography>
                    <FormField>
                        <Checkbox
                            inputId="checkbox-3"
                            onChange={this.handleCheckbox3Change}
                            indeterminate={this.state.checkbox3State === "indeterminate"}
                            checked={this.state.checkbox3State === "checked"} />
                        <label htmlFor="checkbox-3">
                            Checkbox 3
                        </label>
                    </FormField>
                    <div>
                        <Button onClick={this.handleIndeterminateClick} raised>
                            Make Indetermiated
                        </Button>
                    </div>
                </Section>
            </div>
        );
    }

    private handleCheckbox3Change = () => {
        this.setState((state: State): State => {
            let checkbox3State: CheckboxState = "checked";
            switch (state.checkbox3State) {
                case "checked":
                    checkbox3State = "unchecked";
                default:
            }
            return { checkbox3State };
        });
    }

    private handleIndeterminateClick = () => {
        this.setState({
            checkbox3State: "indeterminate",
        });
    }
}
