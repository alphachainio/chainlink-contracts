"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class AggregatorValidatorMockFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AggregatorValidatorMockFactory = AggregatorValidatorMockFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_previousRoundId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "int256",
                name: "_previousAnswer",
                type: "int256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_currentRoundId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "int256",
                name: "_currentAnswer",
                type: "int256"
            }
        ],
        name: "Validated",
        type: "event"
    },
    {
        inputs: [],
        name: "currentAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "currentRoundId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "previousAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "previousRoundId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_previousRoundId",
                type: "uint256"
            },
            {
                internalType: "int256",
                name: "_previousAnswer",
                type: "int256"
            },
            {
                internalType: "uint256",
                name: "_currentRoundId",
                type: "uint256"
            },
            {
                internalType: "int256",
                name: "_currentAnswer",
                type: "int256"
            }
        ],
        name: "validate",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b5061017d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639cbe5efd116100505780639cbe5efd1461008e5780639e8fcbe914610096578063beed9b511461009e57610067565b8063308dd1911461006c5780637e1b4cb014610086575b600080fd5b6100746100e1565b60408051918252519081900360200190f35b6100746100e7565b6100746100ed565b6100746100f3565b6100cd600480360360808110156100b457600080fd5b50803590602081013590604081013590606001356100f9565b604080519115158252519081900360200190f35b60015481565b60035481565b60025481565b60005481565b600081847f67153bf264f6b67e597cb9f55ec356e629048d2d8cfebb8da80fe1a3f7849aed8786604051808381526020018281526020019250505060405180910390a350600194935050505056fea2646970667358221220c636bfa06ab99cb791695d25c05ca7e815cd0d105895c4f57a0088a27605433d64736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdncmVnYXRvclZhbGlkYXRvck1vY2tGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWdncmVnYXRvclZhbGlkYXRvck1vY2tGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMkQ7QUFPM0QsTUFBYSw4QkFBK0IsU0FBUSx3QkFBZTtJQUNqRSxZQUFZLE1BQWU7UUFDekIsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFnQztRQUNyQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFxQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxTQUFnQztRQUNuRCxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQWU7UUFDcEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBNEIsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBbUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxpQkFBUSxDQUNqQixPQUFPLEVBQ1AsSUFBSSxFQUNKLGdCQUFnQixDQUNVLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBM0JELHdFQTJCQztBQUVELE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxlQUFlLEVBQUUsTUFBTTtRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsTUFBTTtnQkFDcEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2IsOHpCQUE4ekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgVW5zaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnMvdXRpbHMvdHJhbnNhY3Rpb25cIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQWdncmVnYXRvclZhbGlkYXRvck1vY2sgfSBmcm9tIFwiLi9BZ2dyZWdhdG9yVmFsaWRhdG9yTW9ja1wiO1xuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRvclZhbGlkYXRvck1vY2tGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogUHJvbWlzZTxBZ2dyZWdhdG9yVmFsaWRhdG9yTW9jaz4ge1xuICAgIHJldHVybiBzdXBlci5kZXBsb3kob3ZlcnJpZGVzKSBhcyBQcm9taXNlPEFnZ3JlZ2F0b3JWYWxpZGF0b3JNb2NrPjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBBZ2dyZWdhdG9yVmFsaWRhdG9yTW9jayB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBBZ2dyZWdhdG9yVmFsaWRhdG9yTW9jaztcbiAgfVxuICBjb25uZWN0KHNpZ25lcjogU2lnbmVyKTogQWdncmVnYXRvclZhbGlkYXRvck1vY2tGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIEFnZ3JlZ2F0b3JWYWxpZGF0b3JNb2NrRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogQWdncmVnYXRvclZhbGlkYXRvck1vY2sge1xuICAgIHJldHVybiBuZXcgQ29udHJhY3QoXG4gICAgICBhZGRyZXNzLFxuICAgICAgX2FiaSxcbiAgICAgIHNpZ25lck9yUHJvdmlkZXJcbiAgICApIGFzIEFnZ3JlZ2F0b3JWYWxpZGF0b3JNb2NrO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJfcHJldmlvdXNSb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX3ByZXZpb3VzQW5zd2VyXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IGZhbHNlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIl9jdXJyZW50Um91bmRJZFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIl9jdXJyZW50QW5zd2VyXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiVmFsaWRhdGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiY3VycmVudEFuc3dlclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImN1cnJlbnRSb3VuZElkXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJwcmV2aW91c0Fuc3dlclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcInByZXZpb3VzUm91bmRJZFwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJfcHJldmlvdXNSb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX3ByZXZpb3VzQW5zd2VyXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX2N1cnJlbnRSb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX2N1cnJlbnRBbnN3ZXJcIixcbiAgICAgICAgdHlwZTogXCJpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJvb2xcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJib29sXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MTAxN2Q4MDYxMDAyMDYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA1MjM0ODAxNTYxMDAxMDU3NjAwMDgwZmQ1YjUwNjAwNDM2MTA2MTAwNjc1NzYwMDAzNTYwZTAxYzgwNjM5Y2JlNWVmZDExNjEwMDUwNTc4MDYzOWNiZTVlZmQxNDYxMDA4ZTU3ODA2MzllOGZjYmU5MTQ2MTAwOTY1NzgwNjNiZWVkOWI1MTE0NjEwMDllNTc2MTAwNjc1NjViODA2MzMwOGRkMTkxMTQ2MTAwNmM1NzgwNjM3ZTFiNGNiMDE0NjEwMDg2NTc1YjYwMDA4MGZkNWI2MTAwNzQ2MTAwZTE1NjViNjA0MDgwNTE5MTgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViNjEwMDc0NjEwMGU3NTY1YjYxMDA3NDYxMDBlZDU2NWI2MTAwNzQ2MTAwZjM1NjViNjEwMGNkNjAwNDgwMzYwMzYwODA4MTEwMTU2MTAwYjQ1NzYwMDA4MGZkNWI1MDgwMzU5MDYwMjA4MTAxMzU5MDYwNDA4MTAxMzU5MDYwNjAwMTM1NjEwMGY5NTY1YjYwNDA4MDUxOTExNTE1ODI1MjUxOTA4MTkwMDM2MDIwMDE5MGYzNWI2MDAxNTQ4MTU2NWI2MDAzNTQ4MTU2NWI2MDAyNTQ4MTU2NWI2MDAwNTQ4MTU2NWI2MDAwODE4NDdmNjcxNTNiZjI2NGY2YjY3ZTU5N2NiOWY1NWVjMzU2ZTYyOTA0OGQyZDhjZmViYjhkYTgwZmUxYTNmNzg0OWFlZDg3ODY2MDQwNTE4MDgzODE1MjYwMjAwMTgyODE1MjYwMjAwMTkyNTA1MDUwNjA0MDUxODA5MTAzOTBhMzUwNjAwMTk0OTM1MDUwNTA1MDU2ZmVhMjY0Njk3MDY2NzM1ODIyMTIyMGM2MzZiZmEwNmFiOTljYjc5MTY5NWQyNWMwNWNhN2U4MTVjZDBkMTA1ODk1YzRmNTdhMDA4OGEyNzYwNTQzM2Q2NDczNmY2YzYzNDMwMDA2MDYwMDMzXCI7XG4iXX0=