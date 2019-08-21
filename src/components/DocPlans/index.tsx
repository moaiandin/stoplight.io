import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Section } from '../Section';

export interface IDocPlanFeature {
  title: string;
  plans: Array<IDocPlan['title']>;
}

export interface IDocPlan {
  title: string;
  price: string;
  domains: string;
  link?: string;
}

export interface IDocPlans {
  title: string;
  description: string;
  features: IDocPlanFeature[];
  plans: IDocPlan[];
  buttonUrl: string;
  buttonText: string;
}

export const DocPlans: React.FunctionComponent<IDocPlans> = ({
  title,
  description,
  features,
  plans,
  buttonUrl,
  buttonText,
}) => {
  return (
    <Section id="docPlans">
      <Container className="mx-auto">
        <div className="text-center mb-20">
          <div className="text-4xl font-bold">{title}</div>
          <div
            className="mt-10 text-xl mx-auto opacity-50 max-w-lg leading-loose"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="shadow-lg">
          <table className="hubs-table bg-white">
            <thead>
              <tr>
                <th />
                {plans &&
                  plans.length > 0 &&
                  plans.map((plan, index) => (
                    <th key={index}>
                      <div className="flex flex-col">
                        <p className="text-accent font-bold">{plan.title}</p>
                        <Link className="flex-1 font-bold mt-2 text-lg" to={plan.link}>
                          {plan.price}
                        </Link>
                        <p className="mt-2">{plan.domains}</p>
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {features &&
                features.length > 0 &&
                features.map((feature, index) => {
                  return (
                    <tr key={index}>
                      <td>{feature.title}</td>

                      {plans.map((plan, planIndex) => {
                        return (
                          <td key={planIndex}>
                            {feature.plans.includes(plan.title) && (
                              <Icon className="text-green" icon="check-circle" size="lg" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div>
            <Link
              to={buttonUrl}
              title={buttonText}
              className="block py-6 bg-green hover:bg-green-light font-bold text-center text-xl text-white hover:text-white"
            >
              {buttonText}
              <Icon icon="arrow-right" className="ml-3" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
